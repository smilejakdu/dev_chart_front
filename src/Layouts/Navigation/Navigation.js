import React from 'react';
import { withRouter } from 'react-router-dom';
import { CategoryLinkItem, CategoryLink } from './Navigation.style';

const categories = [
  {
    name: 'chart',
    text: 'Chart',
  },
  {
    name: 'programming',
    text: 'Programming',
  },
  {
    name: 'user',
    text: 'User View',
  },
];
const Navigation = () => {
  // Header 부분 
  return (
    <div>
      <CategoryLink>
        {categories.map((c) => (
          <CategoryLinkItem
            key={c.name}
            exact={c.name}
            to={
              c.name === 'Login'
                ? '/compoundinfo'
                : `/${c.name}`
            }
          >
            {c.text}
          </CategoryLinkItem>
        ))}

        <CategoryLinkItem to={'/Login'}>
          Login
        </CategoryLinkItem>

      </CategoryLink>
    </div>
  );
};

export default withRouter(Navigation);
