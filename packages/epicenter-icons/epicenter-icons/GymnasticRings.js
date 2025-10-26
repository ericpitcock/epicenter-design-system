import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.5 22C19.5376 22 22 19.5376 22 16.5C22 13.4624 19.5376 11 16.5 11C13.4624 11 11 13.4624 11 16.5C11 19.5376 13.4624 22 16.5 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5 11V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 9.30301C10.9999 7.90869 9.36299 7 7.51337 7C4.46842 7 2 9.46269 2 12.5006C2 15.7438 4.92815 18.3289 8.14063 17.9659', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7.5 7L7.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GymnasticRings',
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
