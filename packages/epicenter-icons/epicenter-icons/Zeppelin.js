import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 10.9971C2 13.9971 10 16.9971 15 16.9971C19 16.9971 22 14.3108 22 10.9971C22 7.68336 19 4.99707 15 4.99707C10 4.99707 2 7.99707 2 10.9971Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 10.9971H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 6L5.73615 4.49077C5.2673 4.1782 4.68834 4.07791 4.14168 4.21458L3 4.5L4 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 16L5.73615 17.5092C5.2673 17.8218 4.68834 17.9221 4.14168 17.7854L3 17.5L4 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 17L12.7813 18.5626C12.9193 18.8386 13.177 19.0354 13.4796 19.0959L17.065 19.813C17.5884 19.9177 18.1018 19.5928 18.2313 19.075L19 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Zeppelin',
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
