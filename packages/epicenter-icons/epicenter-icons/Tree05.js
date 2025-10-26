import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 17.4836C16.6764 16.7687 18 15.2035 18 12.0195C18 7.60125 15 2 12 2C9 2 6 7.60125 6 12.0195C6 15.2035 7.32362 16.7851 9 17.5', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 15L14.5 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 13L9.5 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10 22H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tree05',
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
            _hoisted5
        ])
    }
})
