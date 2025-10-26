import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3H21V15C21 16.6569 19.6569 18 18 18H6C4.34315 18 3 16.6569 3 15V3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 3H22', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.5 18.5V21M18.5 18.5V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 10.5L21 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10 13.5L10.7889 13.8944C10.9277 13.9639 11.0808 14 11.2361 14H12.7639C12.9192 14 13.0723 13.9639 13.2111 13.8944L14 13.5', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M10 6.5L10.7889 6.89443C10.9277 6.96385 11.0808 7 11.2361 7H12.7639C12.9192 7 13.0723 6.96385 13.2111 6.89443L14 6.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Cabinet03',
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
