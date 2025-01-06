---
layout: ../../layouts/SobreMdLayout.astro
shortTitle: 'Escalada'
title: 'Escalada'
order: 2

import { getCollection } from '@astro/eventos';

const posts = await getCollection('escalada');
---
# Escalada

## <p> Formação 2025 </p>
Lista de Cursos

<ul>
  {posts.map((post) => (
    <li>
      <a href={post.url}>{post.title}</a>
    </li>
  ))}
</ul>


## <p> Niveis de Formação</p>
> Criar o esquema com desportiva e classica e técnicos

