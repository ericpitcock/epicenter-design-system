import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2V12Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 17C7 19.7614 9.23858 22 12 22V12C9.23858 12 7 14.2386 7 17Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 12C12 14.7614 14.2386 17 17 17C19.7614 17 22 14.7614 22 12L12 12Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 7C4.23858 7 2 9.23858 2 12H12C12 9.23858 9.76142 7 7 7Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GooglePhotos',
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
