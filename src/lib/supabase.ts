import { createClient } from '@supabase/supabase-js';

// Using values directly since .env is gitignored and these are public keys
const supabaseUrl = 'https://gydbdtzkdnnfmapjkczk.supabase.co';
const supabaseAnonKey = 'sb_publishable_dUdQlNyVU80aCuOYr90Jww_wQHlIGPa';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
