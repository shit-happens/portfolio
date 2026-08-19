import React, {useState, useEffect, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import SectionHead from "../../components/sectionHead/SectionHead";
import {openSource, socialMediaLinks} from "../../portfolio";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  if (
    typeof repo === "string" ||
    repo instanceof String ||
    !openSource.display
  ) {
    return <FailedLoading />;
  }

  return (
    <Suspense fallback={renderLoader()}>
      <section className="section projects" id="opensource">
        <SectionHead eyebrow="05 / Code" title="Open Source Projects" />

        <div className="repo-grid">
          {repo.map((v, i) => {
            if (!v) {
              console.error(
                `Github Object for repository number : ${i} is undefined`
              );
              return null;
            }
            return <GithubRepoCard repo={v} key={v.node.id} index={i} />;
          })}
        </div>

        <div className="projects__cta">
          <Button
            text="More Projects"
            href={socialMediaLinks.github}
            newTab={true}
            variant="ghost"
            icon="fas fa-external-link-alt"
          />
        </div>
      </section>
    </Suspense>
  );
}
