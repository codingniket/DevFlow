const ROUTES = {
  HOME: "/",
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
  ASK_QUESTION: "/ask-question",
};

export default ROUTES;
