import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 3.5H18.5C19.6046 3.5 20.5 4.39543 20.5 5.5V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 20.5L5.5 20.5C4.39543 20.5 3.5 19.6046 3.5 18.5L3.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 20.5L13.801 13.0192C14.5045 12.4212 15.5259 12.3825 16.2726 12.9256L20.5 16' })
const _hoisted4 = h('path', { 'd': 'M10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ImageCrop',
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
