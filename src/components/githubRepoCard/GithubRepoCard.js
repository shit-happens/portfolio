import React from "react";
import "./GithubRepoCard.scss";
import Reveal from "../reveal/Reveal";
import {formatFileSizeDisplay} from "../../utils";

export default function GithubRepoCard({repo, index = 0}) {
  const node = repo.node;

  return (
    <Reveal delay={(index % 3) * 80}>
      <a
        className="repo"
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="repo__head">
          <i className="fas fa-code-branch repo__glyph" aria-hidden="true" />
          <h3 className="repo__name">{node.name}</h3>
          <i className="fas fa-arrow-right repo__arrow" aria-hidden="true" />
        </div>

        <p className="repo__description">
          {node.description || "No description provided."}
        </p>

        <div className="repo__stats">
          {node.primaryLanguage !== null && (
            <span className="repo__stat repo__lang">
              <span
                className="repo__lang-dot"
                style={{backgroundColor: node.primaryLanguage.color}}
              />
              {node.primaryLanguage.name}
            </span>
          )}
          <span className="repo__stat">
            <i className="fas fa-code-branch" aria-hidden="true" />
            {node.forkCount}
          </span>
          <span className="repo__stat">
            <i className="far fa-star" aria-hidden="true" />
            {node.stargazers.totalCount}
          </span>
          <span className="repo__stat repo__stat--end">
            {formatFileSizeDisplay(node.diskUsage)}
          </span>
        </div>
      </a>
    </Reveal>
  );
}
