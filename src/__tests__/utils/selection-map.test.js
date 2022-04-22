import selectionFilter from "../../utils/selection-map";

test("selectionFilter with legit data", () => {
  const series = [
    {
      id: "series-1x",
      title: "The Best Series",
      description: "Great series...",
      genre: "documentaries",
      maturity: "15",
      slug: "best-series-ever",
    },
  ];
  const films = [
    {
      id: "film-1x",
      title: "The Prestige",
      description: "Great film...",
      genre: "thriller",
      maturity: "15",
      slug: "the-prestige",
    },
  ];

  const slides = selectionFilter({ series, films });
  console.log[("slides", slides)];

  expect(slides.series[0].title).toBe("Documentaries");
  expect(slides.series[0].data[0].description).toBe("Great series...");
  expect(slides.series[0].data[0].genre).toBe("documentaries");
  expect(slides.series[0].data[0].maturity).toBe("15");
  expect(slides.series[0].data[0].slug).toBe("best-series-ever");

  expect(slides.films[0].title).toBe("Thriller");
  expect(slides.films[0].data[0].description).toBe("Great film...");
  expect(slides.films[0].data[0].genre).toBe("thriller");
  expect(slides.films[0].data[0].maturity).toBe("15");
  expect(slides.films[0].data[0].slug).toBe("the-prestige");
});

test("selectionFilter with no data", () => {
  const slides = selectionFilter();

  expect(slides.series[0].title).toBe("Documentaries");
  expect(slides.films[0].title).toBe("Thriller");
  expect(slides.series[0].data).toBe(undefined);
  expect(slides.films[0].data).toBe(undefined);
});
