//import { DiCode } from 'react-icons/di';
import { DiCodeBadge } from 'react-icons/di';
//import { DiPython } from 'react-icons/di';
//import { DiLinux } from 'react-icons/di';
import { DiWindows } from 'react-icons/di';
import { FiLoader } from 'react-icons/fi';
import { FiGitPullRequest } from 'react-icons/fi';
import { FiAlignLeft } from 'react-icons/fi';
import { FiGithub } from "react-icons/fi";
import { FiImage } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiMonitor } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

export const icons = {
  web: FiMonitor,
  code: DiCodeBadge,
  os: DiWindows,
  ci: FiLoader,
  scm: FiGitPullRequest,
  users: FiUsers,
  docs: FiAlignLeft,
  image: FiImage,
};

export const socialIcons = {
  linkedin: FiLinkedin,
  github: FiGithub,
};
