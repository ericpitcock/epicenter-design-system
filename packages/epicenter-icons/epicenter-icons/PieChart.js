import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.5 15.8278C17.9985 21.756 9.86407 23.4835 5.20143 18.8641C0.629484 14.3347 2.04493 6.12883 8.05653 3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.4718 12.5C21.671 9.85979 20.82 7.13848 18.7986 5.13585C16.7723 3.12841 14.0904 2.31961 11.5 2.5333V12.5H21.4718Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PieChart',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
