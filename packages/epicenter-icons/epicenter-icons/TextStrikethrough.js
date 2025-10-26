import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 12H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 6.5C17.4794 4.41242 14.9345 3 12 3C8.68629 3 6 5.01472 6 7.5C6 8.35161 6.18155 8.96075 6.5 9.5M6 17.5C6.50862 19.5987 9.055 21 12 21C15.3137 21 18 18.9853 18 16.5C18 13.0382 15 12 12 12', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'TextStrikethrough',
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
