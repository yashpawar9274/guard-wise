-- Fix security issues with functions by adding search_path

-- Update the function to be security definer with proper search path
CREATE OR REPLACE FUNCTION public.update_permissions_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
IF NEW.granted = true AND OLD.granted = false THEN
  NEW.granted_at = now();
END IF;
RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';