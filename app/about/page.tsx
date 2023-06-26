const AboutPage = () => {
  const artStr = String.raw`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                      ⢀⣤⣴⣶⣶⣾⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣼⣿⣿⣿⣿⠛⠉⠉⠙⠻⣿⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⡇⠀⢀⡄⠀⠀⠈⢻⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⢿⣿⣿⣿⣷⡀⠈⣶⣿⣿⠆⠀⠀⠹⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⡏⠀⠀⠈⠻⣿⣿⣷⣄⠈⢉⡄⠀⠀⠀⠀⢿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⠀⢯⣵⣦⠘⣿⣿⣿⡿⣿⡇⠀⠀⠀⢠⣿⣿⣇⠀⠀⠀⠀⢀⣀⣴⠒⠛⠓⢦⣄⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣦⠈⠛⠋⢠⣿⣿⣿⣾⡿⠁⠀⠀⣠⡾⠛⣿⡟⣷⡤⠒⣉⣡⣤⡾⠶⠶⣤⣀⠹⣷⡄
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣇⠀⠀⠀⠈⠉⠉⠁⠀⣀⣤⣾⣿⠀⠀⠈⢿⣧⡙⠛⠉⠁⠀⠀⠀⠀⠀⠀⣱⡬⠿
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠴⠒⠚⠋⠈⠳⣤⣀⣠⠤⠤⠖⠛⠋⠈⡿⠃⠀⠀⠀⠈⣿⢷⣀⣀⣀⡠⠤⠤⠤⠖⠋⠀⠀⠀
  ⠀⠀⠀⠀⢀⣀⠤⠤⠒⢊⣁⡤⠾⣿⢆⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡅⠀⠀⠀⠀⣠⣿⡇⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⢀⣴⣾⣥⣴⠶⠾⠛⠁⠋⠀⣴⣋⡚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡏⠀⠀⠀⣰⠿⣿⣷⣈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⢠⠎⢹⠏⠀⠀⠀⠀⠀⠀⣰⠟⠁⠈⢉⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⢀⡴⠃⠀⢿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⡎⢠⠇⠀⠀⠀⠀⠀⢀⣴⠟⠉⠀⠀⠀⠉⠓⠒⠤⠤⢀⠀⡀⠀⣀⣠⣆⡠⠖⠉⠀⣄⠀⠈⠛⠋⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⡇⢸⠀⢠⠴⠒⠛⠉⣽⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⣴⣆⠀⢀⠓⠀⠀⠀⢹⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠻⠾⠗⠁⠀⠀⠀⣰⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠆⠴⠓⠀⢻⡝⢦⡀⢷⡀⠀⠀⢨⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⢀⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡛⡋⠘⠺⣆⠙⢟⣧⣧⡀⠁⠀⠀⢸⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠠⢋⡰⣿⣶⣾⣿⣷⣜⣯⠙⣿⡄⠀⠀⠀⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀⠀⠀⠤⠀⠀⠀⠀⠀⠀⠀⢾⢇⡞⣽⠴⢿⠼⣿⣯⣷⡐⢤⡀⠀⠀⠀⢾⣧⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢹⡿⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠈⠃⣀⡰⠃⠀⣸⠀⢿⡿⢿⣿⣦⣿⡀⠀⠀⠀⣿⡷⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⣾⠇⠀⠀⠀⠀⠀⠀⠂⠁⠀⠀⠀⠀⠀⠒⣿⡿⠁⣰⢻⣿⠆⣾⣿⣴⣯⣧⣙⠻⣆⠀⠀⢾⣿⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⢠⣿⣄⠀⠀⠀⠀⡀⠔⢠⣄⠀⢠⣤⣀⣠⡞⠃⠤⢾⣿⣿⡏⣸⣿⣻⣿⣿⣿⣿⡿⣿⣦⡀⢸⣿⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠸⣿⣯⠀⠀⠀⠚⢁⠀⡼⢋⠀⣸⡟⠁⣼⢁⣤⣶⣿⣿⣿⣿⠋⣸⣿⣿⣽⣷⣿⣟⢾⣙⠻⣾⣿⡆⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢻⣯⡄⠀⣠⠖⣡⡞⢁⣾⣾⣉⣼⣿⣿⣿⢛⣥⣿⢿⣿⣿⣿⣿⡿⣿⣿⣿⣆⢻⣶⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠹⣿⣿⣷⣾⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠈⠋⢻⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣹⣿⣿⣿⣿⣿⣿⣿⣿⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⡿⣿⣿⣿⣿⡇⠀⠁⠈⠁⠀⠀⠀⠀⠀⠿⠿⣿⡿⢿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠋⠀⠈⠉⠁⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `;
  return (
    <section className="md:mx-[105px] mx-4 md:mt-4 mt-8 flex flex-col space-y-6">
      <h1 className="text-4xl">About</h1>
      <p className="text-sm leading-8">
        The exchange of knowledge among individuals has consistently served as
        the driving force behind progress and enlightenment. This blog is but a
        shard of what is known and taught, in the hopes that others may deem it
        insightful.
      </p>
      <p className="text-sm leading-8">
        Primarily focused on{" "}
        <span className="italic">software development</span>{" "}
        <span className="text-xs ">{"(particularly web development)"}</span> —
        this blog encompasses my personal{" "}
        <span className="italic">
          exploration of various domains of computing
        </span>{" "}
        <span className="text-xs ">
          {
            "(Data Science, Software development, WebGL + WASM, Systems Programming)"
          }
        </span>
        , my college lecture notes, and a whole lot of other things just enough
        to make me a sufficient dork.
      </p>
      <p className="text-sm leading-8">
        This blog also contain things that{" "}
        <span className="italic">keeps me sane and inspired</span>{" "}
        <span className="text-xs italic">{"(music, movies, books, art)"}</span>{" "}
        — just to inject life into this blog on what could otherwise be
        perceived as too pragmatic.
      </p>
      <p className="text-sm italic">
        Cheers,
        <br /> <span className="text-main font-bold">km</span>
        <span className="text-main font-bold opacity-50">fp</span>{" "}
      </p>
    </section>
  );
};

export default AboutPage;
