import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function normalizePath(path = '/') {
  return path.startsWith('/') ? path : `/${path}`;
}

function createAbsoluteUrl(siteConfig, path = '/') {
  const normalizedBaseUrl = siteConfig.baseUrl.endsWith('/')
    ? siteConfig.baseUrl.slice(0, -1)
    : siteConfig.baseUrl;

  return `${siteConfig.url}${normalizedBaseUrl}${normalizePath(path)}`;
}

function createBreadcrumbSchema(siteConfig, breadcrumbs) {
  if (breadcrumbs.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: createAbsoluteUrl(siteConfig, item.path),
    })),
  };
}

export function SeoHead({
  title,
  description,
  path = '/',
  type = 'Article',
  keywords = [],
  breadcrumbs = [],
  extraSchemas = [],
}) {
  const {siteConfig} = useDocusaurusContext();
  const imagePath = siteConfig.themeConfig.image || '/img/seo-cover.svg';
  const absoluteImage = createAbsoluteUrl(siteConfig, imagePath);
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': type,
      headline: title,
      name: title,
      description,
      url: createAbsoluteUrl(siteConfig, path),
      image: absoluteImage,
      inLanguage: 'zh-Hans',
      isPartOf: {
        '@type': 'WebSite',
        name: siteConfig.title,
        url: createAbsoluteUrl(siteConfig, '/'),
      },
    },
    createBreadcrumbSchema(siteConfig, breadcrumbs),
    ...extraSchemas,
  ].filter(Boolean);

  return (
    <Head>
      {keywords.length > 0 ? <meta name="keywords" content={keywords.join(', ')} /> : null}
      <meta property="og:image" content={absoluteImage} />
      <meta name="twitter:image" content={absoluteImage} />
      {schemas.map((schema, index) => (
        <script key={`${type}-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
}
