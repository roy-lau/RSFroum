export const tableStyle = {
  methods: {
    // 表格头部的style
    // headerRowStyle({ row, rowIndex }) {
    //   return ''
    // },
    // 表格每行的style
    rowStyle({ row, rowIndex }) {
      return rowIndex % 2 === 1 ? 'background-color:#f5fbfc' : ''
    },
  },
}
