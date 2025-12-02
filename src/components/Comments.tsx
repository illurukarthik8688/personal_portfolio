import { useState, useEffect, useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, Trash2, CheckCircle, XCircle, User, MessageSquare } from 'lucide-react';

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY as string | undefined;

interface Comment {
  id: number;
  name: string;
  message: string;
  approved: boolean;
  created_at: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const canUseSupabase = Boolean(supabaseUrl && supabaseAnonKey);
  const supabaseClient = useMemo(() => {
    if (!canUseSupabase) return null;
    return createClient(supabaseUrl as string, supabaseAnonKey as string);
  }, [canUseSupabase]);
  
  // Admin state
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [allComments, setAllComments] = useState<Comment[]>([]);

  const ADMIN_PASSWORD = ((import.meta as any).env?.VITE_ADMIN_PASSWORD as string | undefined) || 'admin123';

  // Load approved comments for public view
  const loadComments = async () => {
    if (!supabaseClient) return;
    const { data, error } = await supabaseClient
      .from('comments')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setComments(data);
    }
  };

  // Load all comments for admin view
  const loadAllComments = async () => {
    if (!supabaseClient) return;
    const { data, error } = await supabaseClient
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setAllComments(data);
    }
  };

  useEffect(() => {
    loadComments();
  }, [supabaseClient]);

  useEffect(() => {
    if (isAdmin) {
      loadAllComments();
    }
  }, [isAdmin, supabaseClient]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    if (!supabaseClient) return;
    setLoading(true);
    const { error } = await supabaseClient
      .from('comments')
      .insert([{ name: name.trim(), message: message.trim(), approved: false }]);

    setLoading(false);
    if (!error) {
      setName('');
      setMessage('');
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      loadAllComments();
    } else {
      alert('Incorrect password');
    }
  };

  const approveComment = async (id: number) => {
    if (!supabaseClient) return;
    const { error } = await supabaseClient
      .from('comments')
      .update({ approved: true })
      .eq('id', id);

    if (!error) {
      loadAllComments();
      loadComments();
    }
  };

  const deleteComment = async (id: number) => {
    if (!confirm('Delete this comment permanently?')) return;
    
    if (!supabaseClient) return;
    const { error } = await supabaseClient
      .from('comments')
      .delete()
      .eq('id', id);

    if (!error) {
      loadAllComments();
      loadComments();
    }
  };

  if (!canUseSupabase) {
    return (
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-2">Comments</h3>
        <p className="text-sm text-gray-500">Comments are temporarily unavailable. Configure Supabase env vars to enable this feature.</p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <MessageSquare className="text-purple-600" size={28} />
          Comments
        </h3>
        <button
          onClick={() => setShowAdmin(!showAdmin)}
          className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
        >
          {showAdmin ? 'Hide Admin' : 'Admin'}
        </button>
      </div>

      {/* Admin Panel */}
      {showAdmin && (
        <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          {!isAdmin ? (
            <div className="flex gap-2">
              <input
                type="password"
                placeholder="Admin password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={handleAdminLogin}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Login
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg">Admin Panel - All Comments</h4>
                <button
                  onClick={() => { setIsAdmin(false); setAdminPassword(''); }}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {allComments.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No comments yet</p>
                ) : (
                  allComments.map((comment) => (
                    <div
                      key={comment.id}
                      className={`p-4 rounded-lg border-2 ${
                        comment.approved
                          ? 'bg-green-50 border-green-200'
                          : 'bg-yellow-50 border-yellow-200'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{comment.name}</p>
                          <p className="text-gray-700 mt-1">{comment.message}</p>
                          <p className="text-xs text-gray-500 mt-2">
                            {new Date(comment.created_at).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          {comment.approved ? (
                            <button
                              onClick={() => deleteComment(comment.id)}
                              className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 size={18} />
                            </button>
                          ) : (
                            <>
                              <button
                                onClick={() => approveComment(comment.id)}
                                className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                                title="Approve"
                              >
                                <CheckCircle size={18} />
                              </button>
                              <button
                                onClick={() => deleteComment(comment.id)}
                                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                                title="Reject (Delete)"
                              >
                                <XCircle size={18} />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 glass p-6 rounded-xl shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Comment
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your thoughts..."
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Your comment will be reviewed before appearing publicly.
          </p>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
        {submitSuccess && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
            <CheckCircle size={20} />
            <span>Comment submitted! It will appear after approval.</span>
          </div>
        )}
      </form>

      {/* Approved Comments */}
      <div className="space-y-4">
        <h4 className="font-bold text-lg text-gray-900">
          {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
        </h4>
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="glass p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full">
                  <User className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{comment.name}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(comment.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{comment.message}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
