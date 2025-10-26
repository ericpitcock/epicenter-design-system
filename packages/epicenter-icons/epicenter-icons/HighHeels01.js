import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.9999 18C17.0322 18.6667 15.6892 19.8667 16.0644 22', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.49988 5L15.4999 7.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.99997 7C6.95999 9 7.94667 11.5 5.97332 14.5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15.5169 16.7388C14.7353 15.613 14.7428 13.7738 15.0511 11.0689L15.999 4.00887C15.9996 4.00383 15.9964 3.99908 15.9915 3.99784L7.99995 2L6.50003 5C3.30003 6.2 3.00003 9 3.00003 11L12 22L19.2439 22C20.2138 22 21 21.2138 21 20.244C21 19.4987 20.5299 18.8289 19.8155 18.6163C17.5107 17.9303 16.329 17.9087 15.5169 16.7388Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HighHeels01',
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
