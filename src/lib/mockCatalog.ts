const placeholder = (seed: number) =>
  `https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=900&auto=format&fit=crop&sig=${seed}`;

export const hero = {
  title: "Midnight Confessions",
  subtitle: "A rooftop secret spirals into a citywide obsession.",
  backgroundImage:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
};

export const rows = [
  {
    title: "Continue Watching",
    items: Array.from({ length: 12 }, (_, index) => ({
      title: `Episode ${index + 1}: Silent Vows`,
      image: placeholder(index + 1)
    }))
  },
  {
    title: "Trending",
    items: Array.from({ length: 14 }, (_, index) => ({
      title: `Heatline ${index + 1}`,
      image: placeholder(index + 20)
    }))
  },
  {
    title: "New Drops",
    items: Array.from({ length: 16 }, (_, index) => ({
      title: `Velvet Hour ${index + 1}`,
      image: placeholder(index + 40)
    }))
  },
  {
    title: "Editors' Picks",
    items: Array.from({ length: 10 }, (_, index) => ({
      title: `City of Secrets ${index + 1}`,
      image: placeholder(index + 60)
    }))
  },
  {
    title: "Romance Noir",
    items: Array.from({ length: 12 }, (_, index) => ({
      title: `Crimson Letters ${index + 1}`,
      image: placeholder(index + 80)
    }))
  },
  {
    title: "Edge of Thriller",
    items: Array.from({ length: 15 }, (_, index) => ({
      title: `Glassline ${index + 1}`,
      image: placeholder(index + 100)
    }))
  },
  {
    title: "Dreamlike Drama",
    items: Array.from({ length: 13 }, (_, index) => ({
      title: `Halo Drift ${index + 1}`,
      image: placeholder(index + 120)
    }))
  },
  {
    title: "Binge in 10",
    items: Array.from({ length: 10 }, (_, index) => ({
      title: `Neon Echo ${index + 1}`,
      image: placeholder(index + 140)
    }))
  }
];
