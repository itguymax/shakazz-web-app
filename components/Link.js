/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { NavLink as MenuLink, Link as A } from 'theme-ui';
import NextLink from 'next/link';
export function NavLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <MenuLink {...rest}>{children ? children : label}</MenuLink>
    </NextLink>
  );
}
export function Link({ path, label, children,className, ...rest }) {
  return (
    <NextLink href={path} className={className}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}