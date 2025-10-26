import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.6016 16.3984L5 22M10 15C10.0419 15.4713 10.1813 15.9821 10.5996 16.4004C11.0179 16.8187 11.5287 16.9581 12 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 11L12.5 8.5L14.6885 5.84851C15.064 5.39356 15.7497 5.36084 16.1669 5.77797L21.222 10.8331C21.6392 11.2503 21.6064 11.936 21.1515 12.3115L18.5 14.5L16 21L5 22L6 11Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 8.5L18.5 14' })
const _hoisted4 = h('path', { 'd': 'M2 5H8M5.00033 2L5.00033 8', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'PenToolAdd',
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
            _hoisted4
        ])
    }
})
