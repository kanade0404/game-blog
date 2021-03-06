import {Layout, Typography} from 'antd';
import styled from 'styled-components';
import React, {FC} from 'react';
import {TITLE} from '../../../core/const';

const {Title, Text, Link} = Typography;
const {Header} = Layout;
const PageTitle = styled(Title)`
  display: inline-block;
`;
const PageTitleText = styled(Text)`
  color: white;
`;
export const HeaderComponent: FC = () => {
  return (
    <Header className="site-layout-background">
      <PageTitle level={2}>
        <Text>
          <PageTitleText>
            <Link href="/" style={{color: 'white'}}>
              {TITLE}
            </Link>
          </PageTitleText>
        </Text>
      </PageTitle>
    </Header>
  );
};
