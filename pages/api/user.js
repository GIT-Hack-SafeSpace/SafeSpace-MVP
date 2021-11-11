import { supabase } from "../../utils/client";

export async function getOnboarding() {
  try {
    const user = supabase.auth.user();
    if (!user) {
      return null;
    } else {
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`personality`)
        .eq("id", user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        return data;
      }
    }
  } catch (error) {
    alert(error.message);
  }
}
