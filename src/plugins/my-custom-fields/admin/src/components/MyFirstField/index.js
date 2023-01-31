import { TextInput } from '@strapi/design-system/TextInput';
import React from 'react';
import { Button } from '@strapi/design-system/Button';

import { Table, Thead, Tbody, Tr, Td, Th } from '@strapi/design-system/Table';
import { Typography } from "@strapi/design-system/Typography";
import { Box } from '@strapi/design-system/Box';
import { Layout, BaseHeaderLayout } from '@strapi/design-system/Layout';
import { Main } from '@strapi/design-system/Main';


const Field = (props) => {
  console.log('myfirstfield', props);

  const {
    name,
    value,
    attribute,
    onChange,
  } = props;

  const {
    // All our custom field config are here
    placeholder,
    label,
    hint,
  } = attribute.customFieldConfig || {};


  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const entry = {
    cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
    description: 'Chez Léon is a human sized Parisian',
    category: 'French cuisine',
    contact: 'Leon Lafrite'
  };
  const entries = [];
  for (let i = 0; i < 5; i++) {
    entries.push({
      ...entry,
      id: i
    });
  }

  return (
    <Main>
        <TextInput
        id={name}
        placeholder={placeholder}
        label={label || name}
        name={name}
        hint={hint}
        onChange={e => {
            const arg = {
            target: {
                name,
                value: e.target.value,
            },
            }
            onChange(arg);
        }}
        value={value}
        />
        <Button
            variant='secondary'
            onClick={() => alert('hello')}
        >
            Premier test
        </Button>
            <Table style={{width: 500}} colCount={COL_COUNT} rowCount={ROW_COUNT}>
                <Thead>
                <Tr>
                    <Th>
                    <Typography variant="sigma">ID</Typography>
                    </Th>
                    <Th>
                    <Typography variant="sigma">Description</Typography>
                    </Th>
                    <Th>
                    <Typography variant="sigma">Categories</Typography>
                    </Th>
                    <Th>
                    <Typography variant="sigma">Contact</Typography>
                    </Th>
                </Tr>
                </Thead>
                <Tbody>
                {entries.map(entry => <Tr key={entry.id}>
                    <Td>
                        <Typography textColor="neutral800">{entry.id}</Typography>
                    </Td>
                    <Td>
                        <Typography textColor="neutral800">{entry.description}</Typography>
                    </Td>
                    <Td>
                        <Typography textColor="neutral800">{entry.category}</Typography>
                    </Td>
                    <Td>
                        <Typography textColor="neutral800">{entry.contact}</Typography>
                    </Td>
                    </Tr>)}
                </Tbody>
            </Table>
    </Main>
  );
}

export default Field;