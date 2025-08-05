import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface Permission {
  id: string;
  permission_type: string;
  granted: boolean;
  granted_at: string | null;
  updated_at: string;
}

export const usePermissions = () => {
  const { user } = useAuth();
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPermissions = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_permissions')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;
      setPermissions(data || []);
    } catch (error) {
      console.error('Error fetching permissions:', error);
      toast.error('Failed to fetch permissions');
    } finally {
      setLoading(false);
    }
  };

  const updatePermission = async (permissionType: string, granted: boolean) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_permissions')
        .upsert({
          user_id: user.id,
          permission_type: permissionType,
          granted
        });

      if (error) throw error;

      // Update local state
      setPermissions(prev => {
        const existing = prev.find(p => p.permission_type === permissionType);
        if (existing) {
          return prev.map(p => 
            p.permission_type === permissionType 
              ? { ...p, granted, updated_at: new Date().toISOString() }
              : p
          );
        } else {
          return [...prev, {
            id: 'temp-' + Date.now(),
            permission_type: permissionType,
            granted,
            granted_at: granted ? new Date().toISOString() : null,
            updated_at: new Date().toISOString()
          }];
        }
      });

      toast.success(`${permissionType} permission ${granted ? 'granted' : 'revoked'}`);
    } catch (error) {
      console.error('Error updating permission:', error);
      toast.error('Failed to update permission');
    }
  };

  const logActivity = async (activityType: string, activityData: any) => {
    if (!user) return;

    try {
      await supabase
        .from('user_activities')
        .insert({
          user_id: user.id,
          activity_type: activityType,
          activity_data: activityData
        });
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  };

  useEffect(() => {
    fetchPermissions();
  }, [user]);

  return {
    permissions,
    loading,
    updatePermission,
    logActivity,
    refetch: fetchPermissions
  };
};