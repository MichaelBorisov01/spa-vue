<template>
  <div class="wrapTable">
    <v-simple-table class="table">
      <caption class="table__caption_bg">
        <slot></slot>
      </caption>
      <thead class="table__thead">
        <tr class="table-row">
          <th class="table-row__th">Price</th>
          <th class="table-row__th">Quantity</th>
          <th class="table-row__th table-row__th-total_hide">Total</th>
        </tr>
      </thead>
      <tbody class="table__tbody">
        <tr class="table-row" v-for="(item, index) in items" :key="index">
          <td class="table-row__td">{{ item[0] }}</td>
          <td class="table-row__td">{{ item[1] }}</td>
          <td class="table-row__td table-row__td-total_hide">
            {{ item[0] * item[1] }}
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "SimpleTable",
  props: ["items"]
};
</script>

<style scoped>
.wrapTable {
  height: calc(100vh - 120px);
  overflow: auto;
  width: 100%;
}

.table {
  border-collapse: collapse;
  border: 3px solid grey;
  width: 100%;
  text-align: center;
}

.table-row__th,
.table-row__td {
  border: 1.5px solid grey;
  padding: 10px 15px;
}

table-row__th {
  width: 20%;
}

.table__caption_bg {
  background-color: rgb(228, 218, 250);
}


@media screen and (max-device-width: 840px) {
  .table-row__th-total_hide {
    display: none;
  }

  .table-row__td-total_hide {
    display: none;
  }
}
</style>