import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from './../../components/BreadCrumbs';

const breadCrumbsData = [
  {name: 'Home', link: '/'},
  { name: "Blog", link: "/blog" },
  { name: 'article title', link: `/blog/12` }
]

const ArticleDetailPage = () => {
  return (
    <MainLayout>
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
            <article className="flex-1">
              <BreadCrumbs data={breadCrumbsData} />
            </article>
        </section>
    </MainLayout>
    
  )
}

export default ArticleDetailPage