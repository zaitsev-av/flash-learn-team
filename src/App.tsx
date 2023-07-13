import { Button, Card, Checkbox, Pagination, Select } from '@/components'

export const App = () => {
  return (
    <>
      <Button />
      <Select items={['1', '2']} />

      <div style={{ margin: '0 auto', width: '500px' }}>
        <Card>
          <Select fullWidth items={['select1', 'select13', 'select12', 'select11']} />
        </Card>
      </div>

      <div style={{ paddingLeft: '35%' }}>
        <Checkbox />
        <Select
          value={'select1'}
          label={'Choose a question format'}
          items={['select1', 'select2', 'select3', 'select4']}
        />
      </div>

      <Pagination
        currentPage={1}
        totalCount={20}
        pageSize={100}
        siblingCount={2}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
      />
      <Pagination
        currentPage={1}
        totalCount={10}
        pageSize={10}
        siblingCount={2}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
      />
    </>
  )
}
