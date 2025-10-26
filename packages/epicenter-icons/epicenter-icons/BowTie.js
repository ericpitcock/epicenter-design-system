import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.5 9.0004C8.5 8.00083 6.02143 5.78237 4.66065 6.01723C1.11312 6.6295 1.11312 17.3704 4.66065 17.9827C6.02143 18.2175 8.5 15.9949 9.5 14.9953', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 9.0004C15.5 8.00083 17.9786 5.78237 19.3393 6.01723C22.8869 6.6295 22.8869 17.3704 19.3393 17.9827C17.9786 18.2175 15.5 15.9948 14.5 14.9953', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 9.00287H10.5C9.94772 9.00287 9.5 9.45058 9.5 10.0029V14.0048C9.5 14.5571 9.94772 15.0048 10.5 15.0048H13.5C14.0523 15.0048 14.5 14.5571 14.5 14.0048V10.0029C14.5 9.45058 14.0523 9.00287 13.5 9.00287Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 12.0048L7.5 12.0029', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16.5 12.0029L15 12.0048', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BowTie',
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
