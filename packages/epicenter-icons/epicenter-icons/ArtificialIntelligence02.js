import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 22V18.5L17.876 18.8595C18.4728 18.9341 19 18.4687 19 17.8672V14.5L21 13L19 10C19 5.58172 15.4183 2 11 2C6.58172 2 3 5.58172 3 10C3 13.5452 5.30607 16.5518 8.5 17.6016M6 16.2454V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 7V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 12L8.3 10M12 12L11.2 10M8.3 10L9.5 7H10L11.2 10M8.3 10H11.2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArtificialIntelligence02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
