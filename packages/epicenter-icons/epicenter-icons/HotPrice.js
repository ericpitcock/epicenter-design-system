import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.5 17.5L14.5 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 13H10.0072M13.9929 17H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 22C7.8 22 4 18.78 4 13.8C4 11.3034 5.48458 8.69073 8.5 5.5C8.57328 5.99894 8.88446 6.88504 10 8C11.0002 7 12 6 12 2C17.33 6.55 20 10.48 20 13.8C20 18.78 16.2 22 12 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HotPrice',
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
