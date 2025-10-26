import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12Z', 'stroke-linecap': 'square' })
const _hoisted2 = h('path', { 'd': 'M9.5 9H10.5M13 12H10.5M13 12C13.8284 12 14.5 11.3284 14.5 10.5C14.5 9.67157 13.8284 9 13 9H12M13 12C13.8284 12 14.5 12.6716 14.5 13.5C14.5 14.3284 13.8284 15 13 15H12M10.5 12V9M10.5 12V15M9.5 15H10.5M10.5 9H12M10.5 15H12M12 9V8M12 15V16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 2V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M22 12L19 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 19L12 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M5 12H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BitcoinTarget',
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
