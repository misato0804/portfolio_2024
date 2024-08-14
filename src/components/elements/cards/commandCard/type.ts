import { Dispatch, SetStateAction } from "react"
import { Project } from "@/components/features/projectCard/type"

export type CommandCardProps = {
  project: Project,
  setDisplayProject: Dispatch<SetStateAction<Project>>
}