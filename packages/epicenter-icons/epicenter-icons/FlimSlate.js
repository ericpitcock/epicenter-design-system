import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 11H4V20C4 21.1046 4.89543 22 6 22H19.5C20.6046 22 21.5 21.1046 21.5 20V11Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.99827 11L20.5 7L19.5604 3.86797C19.2486 2.82879 18.1652 2.22767 17.1185 2.51314L4.53899 5.94391C3.43154 6.24594 2.80502 7.41612 3.16764 8.50524L3.99827 11Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 10L9 4.5' })
const _hoisted4 = h('path', { 'd': 'M14 8.5L15 3' })
const _hoisted5 = h('path', { 'd': 'M8 18H12', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'FlimSlate',
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
