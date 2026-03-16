// Mock API responses used by the app during development or tests.
// Shapes are inferred from components that consume these endpoints.

export const mockData = {
  "/session": {
    data: [
      {
        _id: "s1",
        name: "Fashion Coach",
        description: "Personalised fashion coaching to refine your style and wardrobe.",
        serial: 1,
        image: "/home/fashion_coach.png"
      },
      {
        _id: "s2",
        name: "Dating Coach",
        description: "Dating and relationship coaching to build better connections.",
        serial: 2,
        image: "/home/dating_coach.png"
      }
    ]
  },

  "/sessiondetails": {
    // sessiondetails contains schedule/format variants for sessions
    data: [
      {
        _id: "sd1",
        session: { _id: "s1", name: "Fashion Coach" },
        name: "Online Session",
        price: 80,
        location: "Online"
      },
      {
        _id: "sd2",
        session: { _id: "s1", name: "Fashion Coach" },
        name: "Offline Session",
        price: 120,
        location: "London"
      },
      {
        _id: "sd3",
        session: { _id: "s2", name: "Dating Coach" },
        name: "Online Session",
        price: 90,
        location: "Online"
      },
      {
        _id: "sd4",
        session: { _id: "s2", name: "Dating Coach" },
        name: "Offline Session",
        price: 140,
        location: "New York"
      }
    ]
  },

  "/podcast": {
    data: [
      {
        _id: "p1",
        title: "How to Build Confidence",
        description: "A deep dive into practical steps to grow personal confidence.",
        link: "dQw4w9WgXcQ",
        isFeatured: true,
      },
      {
        _id: "p2",
        title: "Wardrobe Essentials",
        description: "What every wardrobe should contain and why.",
        link: "3JZ_D3ELwOQ",
        isFeatured: false,
      }
    ]
  },

  "/testimonial": {
    data: [
      {
        _id: "t1",
        image: "/testimonials/jane.jpg",
        name: "Jane Doe",
        date: "2025-01-12T00:00:00.000Z",
        title: "Life changing coaching",
        message: "I gained confidence and clarity after the coaching sessions.",
        designation: "Founder",
        campany: "Acme Inc"
      },
      {
        _id: "t2",
        image: "/testimonials/john.jpg",
        name: "John Smith",
        date: "2024-09-08T00:00:00.000Z",
        title: "Highly recommended",
        message: "Practical advice and personable coaching.",
        designation: "Designer",
        campany: "Creative Co"
      }
    ]
  },

  "/social": {
    data: [
      { name: "Facebook", link: "https://facebook.com/example" },
      { name: "Instagram", link: "https://instagram.com/example" },
      { name: "LinkedIn", link: "https://linkedin.com/company/example" },
      { name: "YouTube", link: "https://youtube.com/channel/example" }
    ]
  },

  // Contact POST response (shape is minimal: success message)
  "/contact": {
    status: "success",
    message: "Your message has been received."
  },

  // Payment Intent response used by BookSession (axios expects res.data.id)
  "paymentIntent": {
    id: "cs_test_stripe_session_123456"
  }
};

export default mockData;

/*
Usage examples:
  import mockData from "@/lib/mockdata";
  // mockData['/session'] => { data: [...] }

This file is intended as local mock responses for development or tests. It does
not change runtime network requests. To use these mocks in unit tests or a
storybook/mock server, import `mockData` and return the shapes above.
*/
