import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 9H3L12 22H16L7 9Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.14913 17.5016L3.00024 22H7.00024L8.13808 20.3745L6.14913 17.5016Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.9008 13.5706L21.0002 2H17.0002L10.9119 10.6976L12.9008 13.5706Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 10.2095V22H21V5.92383L18 10.2095Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Grok02',
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
