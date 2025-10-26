import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 22V17C20 15.8954 19.1046 15 18 15H14L12 17L10 15H6C4.89543 15 4 15.8954 4 17V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 15V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 15V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15.5 9V7C15.5 5.067 13.933 3.5 12 3.5C10.067 3.5 8.5 5.067 8.5 7V9C8.5 10.933 10.067 12.5 12 12.5C13.933 12.5 15.5 10.933 15.5 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7.5 7.5H16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12 2V3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Labor',
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
