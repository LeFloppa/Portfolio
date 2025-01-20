const imageMap = {
  argentbank: require("../assets/images/argentbank-poster.png"),
  kasa: require("../assets/images/kasa-poster.png"),
  architect: require("../assets/images/architect-poster.png"),
  astro: require("../assets/images/astro.png"),
};

export async function getProjectsData(language) {
  const url = `/data/projects.${language}.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status} en chargeant ${url}`);
    }
    const data = await response.json();
    ["frontEndProjects", "contentWriterProjects"].forEach((category) => {
      if (data[category]) {
        data[category] = data[category].map((project) => ({
          ...project,
          image: imageMap[project.image] || null,
        }));
      }
    });
    return data;
  } catch (err) {
    console.error("Erreur lors du chargement des données de projets :", err);
    return { frontEndProjects: [], contentWriterProjects: [] };
  }
}
