import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { Main, Section } from 'shared/components/Containers';
import { Button, Form, Input } from 'shared/components/Form';
import { Big, Title } from 'shared/components/Typography';

const IndexPage: NextPage = () => {
  const router = useRouter();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // yeet form data
    const formData = new FormData(event.currentTarget);
    const firstUserId = String(formData.get('firstUserId'));
    const secondUserId = String(formData.get('secondUserId'));

    router.push(`/showdown/${firstUserId}-vs-${secondUserId}`);
  };

  return (
    <Main>
      <Title>WHO IS THE MOST POPULAR DEVELOPER</Title>

      <Form action="#" onSubmit={handleSubmit}>
        <Section>
          <label htmlFor="firstUserId">
            It&apos;s Just One Popular Developer
            <Input
              type="text"
              name="firstUserId"
              placeholder="Ada Lovelace"
              required
            />
          </label>

          <Big style={{ alignSelf: 'start' }}>VS.</Big>

          <label htmlFor="secondUserId">
            Some Other Popular Developer
            <Input
              type="text"
              name="secondUserId"
              placeholder="Grace Hopper"
              required
            />
          </label>
        </Section>

        <Button type="submit">WHO WILL WIN?!</Button>
      </Form>
    </Main>
  );
};

export default IndexPage;
