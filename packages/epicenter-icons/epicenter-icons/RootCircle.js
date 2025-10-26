import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })
const _hoisted2 = h('path', { 'd': 'M15.5 13L14.7764 11.5528C14.607 11.214 14.3788 11 14 11M15.5 13L16.2236 14.4472C16.3752 14.7504 16.6685 14.9607 17 15M15.5 13L14.6 14.2C14.3246 14.5672 13.9349 14.8877 13.5 15M15.5 13L16.4 11.8C16.6754 11.4328 17.0651 11.1123 17.5 11M6 13.5L6.51894 12.9811C7.00158 12.4984 7.81523 12.6305 8.12048 13.241L9.5 16L11.7807 8.70172C11.9112 8.28425 12.2978 8 12.7352 8H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RootCircle',
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
