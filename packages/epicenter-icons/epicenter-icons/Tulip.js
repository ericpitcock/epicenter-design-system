import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 21C12 17.6863 14.6863 15 18 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 21C12 17.6863 9.31371 15 6 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 13V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 13C14.7614 13 17 10.7614 17 8V4C14.2386 4 12 6.23858 12 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14.5 4.5C14 3 12 2 12 2C12 2 10 3 9.5 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12 13C9.23858 13 7 10.7614 7 8V4C8.36273 4 9.59812 4.54516 10.5 5.42928', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tulip',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
