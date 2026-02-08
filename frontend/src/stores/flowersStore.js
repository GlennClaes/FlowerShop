import { defineStore } from 'pinia'
import flowersData from '@/data/flowers.json'

export const useFlowersStore = defineStore('flowers', {
  state: () => ({
    flowers: flowersData,
  }),
  getters: {
    getCategories: (state) => [...new Set(state.flowers.map((f) => f.category))],
    getByCategory: (state) => (category) => state.flowers.filter((f) => f.category === category),
  },
})
