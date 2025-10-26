import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 12V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 12V13H15C18.3137 13 21 10.3137 21 7V6H18C14.6863 6 12 8.68629 12 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 10V11H9C5.68629 11 3 8.31371 3 5V4H6C9.31371 4 12 6.68629 12 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Plant04',
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
