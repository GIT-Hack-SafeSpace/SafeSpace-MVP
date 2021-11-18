import { supabase } from '../utils/client';

export const getPosts = async (userId) => {
  try {
    let {
      data: rave_rant_post,
      error,
      status,
    } = await supabase
      .from('rave_rant_post')
      .select('*')
      .eq('profile_id', userId)
      .eq('deleted', false);

    if (error && status !== 406) {
      throw error;
    }
    if (rave_rant_post) {
      return rave_rant_post;
    }
  } catch (error) {
    alert(error.message);
  }
};

export const deletePost = async (id) => {
  try {
    const { data: delete_post, error } = await supabase
      .from("rave_rant_post")
      .update({ deleted: true })
      .eq("id", id);

    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
};
