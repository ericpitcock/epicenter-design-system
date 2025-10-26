import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 17.0024L10.0087 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 2H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 13.6151C15.5294 14.65 14.1176 15.7439 11.7647 14.3182C10.2495 13.4001 8.93782 12.6631 8 13.16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 2V9L19.8838 20.5259C20.2285 21.1921 19.7649 22 19.0379 22H4.96205C4.2351 22 3.77153 21.1921 4.11617 20.5259L10 9V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15 19.0023L15.0087 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TestTube01',
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
