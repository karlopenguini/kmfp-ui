export interface LayoutPayload {
  writeupCategories: {
    name: string;
    path: string;
  }[];
}

export interface PhotoPayload {
  attribution: string;
  _id: string;
  title: string;
  photo: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface WriteupsByCategoryPayload {
  writeupCategory: {
    title: string;
    description: string;
  };
  writeups: {
    writeupPost: string;
    _createdAt: Date;
    slug: {
      current: string;
      _type: string;
    };
    writeupTags: string[];
    title: string;
  }[];
}

export interface WriteupPostPayload {
  writeupPost: string;
  _createdAt: Date;
  slug: {
    current: string;
    _type: string;
  };
  writeupTags: string[];
  title: string;
  writeupCoverImage: {
    attribution: string;
    caption: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  writeupCategory: {
    _id: string;
    title: string;
  };
}
