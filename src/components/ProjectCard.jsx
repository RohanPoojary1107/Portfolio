import React from "react";
import {
  card,
  cardContent,
  cardTitle,
  cardLang,
  cardDesc,
  cardHeader,
  cardFooter,
} from "./ProjectCard.module.css";
import { github, book, lock } from "../icons.js";
import { Badge } from "react-bootstrap";

const ProjectCard = ({ name, techStack, desc, link, isPrivate }) => {
  return (
    <div className={card}>
      <>
        <div className={cardHeader}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="36"
            viewBox="0 0 31.5 36"
            dangerouslySetInnerHTML={{ __html: book }}
            aria-hidden
          />
          <div className={cardTitle}>{name}</div>
        </div>
        <div className={cardContent}>
          <div className={cardDesc}>{desc}</div>
          <span className="sr-only">Technology stack</span>
          <div className={cardLang}>
            {techStack.map((tool, index) => (
              <Badge pill bg="dark" key={index}>
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </>
      <div className={cardFooter}>
        {isPrivate ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="36"
            viewBox="0 0 31.5 36"
            dangerouslySetInnerHTML={{ __html: lock }}
            aria-hidden
          />
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="view github repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.75"
              height="27.001"
              viewBox="0 0 33.75 27.001"
              dangerouslySetInnerHTML={{ __html: github }}
              aria-hidden
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
