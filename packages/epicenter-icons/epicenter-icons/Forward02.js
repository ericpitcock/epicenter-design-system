import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5735 17.8986C12.9107 18.3625 12 17.8884 12 17.0793V6.92066C12 6.11163 12.9107 5.63748 13.5735 6.10142L20.8297 11.1808C21.3984 11.5789 21.3984 12.4211 20.8297 12.8192L13.5735 17.8986Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.57346 17.8986C2.91069 18.3625 2 17.8884 2 17.0793V6.92066C2 6.11163 2.91069 5.63748 3.57346 6.10142L10.8297 11.1808C11.3984 11.5789 11.3984 12.4211 10.8297 12.8192L3.57346 17.8986Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Forward02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
