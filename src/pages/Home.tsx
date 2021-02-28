import React from 'react';
import styled from 'styled-components';

const CodeBlock = styled.span`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  white-space: pre;
  background: #555555;
  color: #dddddd;
  display: block;
  padding: 8px;
`;
type HomeProps = {};
export const Home = (props: HomeProps) => {
  return (
    <main>
      <h1>Welcome Home! 🏠</h1>
      <article>
        <p>I sure wish there was more to do here 😢</p>
        <p>Run the included tests for some ideas:</p>
        <CodeBlock> yarn test</CodeBlock>
      </article>
    </main>
  );
};
