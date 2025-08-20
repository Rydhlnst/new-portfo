import React from 'react'
import ProjectDetails from './_components/ProjectDetails';
import { projectsData } from '@/lib/data';

type Params = Promise<{id: string}>

const ProjectDetailsPage = async ({params}: {params: Params}) => {
   const {id} = await params;
   const project = projectsData[id]
  return (
    <div className='w-full min-h-screen h-full'>
        <div>
          <ProjectDetails project={project}/>
        </div>
    </div>
  )
}

export default ProjectDetailsPage
